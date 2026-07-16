import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import { FlatList, Platform, Keyboard, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../src/theme/colors';
import { ChatHeader } from '../../src/components/chat/chatHeader';
import { MessageBubble } from '../../src/components/chat/MessageBubble';
import { ChatInput } from '../../src/components/chat/chatInput';
import { getFriendById, getMessagesByFriendId } from '../../src/mock/chatMock';

export default function ChatScreen() {
  const insets = useSafeAreaInsets();
  const { friendId } = useLocalSearchParams();

  // Safety validations to prevent undefined crashes
  const friend = useMemo(() => getFriendById(friendId) ?? { nome: 'Usuário', online: false }, [friendId]);
  const initialMessages = useMemo(() => getMessagesByFriendId(friendId) ?? [], [friendId]);

  const [messages, setMessages] = useState(initialMessages);
  const listRef = useRef(null);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  // Custom keyboard height listener to bypass KeyboardAvoidingView bugs on New Architecture
  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (e) => {
        // Compensates for bottom safe inset when keyboard is open
        setKeyboardHeight(e.endCoordinates.height);
      }
    );
    const hideSubscription = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => setKeyboardHeight(0)
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  // Memoized callback to avoid recreating the send function on every render
  const handleSend = useCallback((texto) => {
    const novaMensagem = {
      id: `local-${Date.now()}`,
      autor: 'eu',
      texto,
      hora: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, novaMensagem]);
    requestAnimationFrame(() => listRef.current?.scrollToEnd({ animated: true }));
  }, []);

  // Memoized renderItem to prevent child re-renders
  const renderItem = useCallback(({ item }) => {
    return <MessageBubble autor={item.autor} texto={item.texto} hora={item.hora} />;
  }, []);

  // Stable key extractor
  const keyExtractor = useCallback((item) => item.id.toString(), []);

  // Stable content size change callback
  const handleContentSizeChange = useCallback(() => {
    listRef.current?.scrollToEnd({ animated: false });
  }, []);

  const keyboardOffset = keyboardHeight > 0 ? keyboardHeight + Platform.select({ ios: 16, android: 48 }) : 0;

  return (
    <LinearGradient colors={[colors.gradientStart, colors.gradientMid, colors.gradientEnd]} style={styles.flex}>
      <View style={[styles.flex, { paddingBottom: keyboardOffset }]}>
        <ChatHeader nome={friend.nome} online={friend.online} />

        <FlatList
          ref={listRef}
          data={messages}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.listContent}
          onContentSizeChange={handleContentSizeChange}
          renderItem={renderItem}
          initialNumToRender={15}
          maxToRenderPerBatch={10}
          windowSize={10}
          removeClippedSubviews={Platform.OS === 'android'}
        />

        <View style={{ paddingBottom: keyboardOffset > 0 ? 0 : insets.bottom }}>
          <ChatInput onSend={handleSend} />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  listContent: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 8, flexGrow: 1 },
});