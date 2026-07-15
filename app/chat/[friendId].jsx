import { useRef, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import { colors } from '../../src/theme/colors';
import { ChatHeader } from '../../src/components/chat/chatHeader';
import { MessageBubble } from '../../src/components/chat/MessageBubble';
import { ChatInput } from '../../src/components/chat/chatInput';
import { getFriendById, getMessagesByFriendId } from '../../src/mock/chatMock';

export default function ChatScreen() {
  const { friendId } = useLocalSearchParams();
  const friend = getFriendById(friendId);
  const [messages, setMessages] = useState(getMessagesByFriendId(friendId));
  const listRef = useRef(null);

  function handleSend(texto) {
    const novaMensagem = {
      id: `local-${Date.now()}`,
      autor: 'eu',
      texto,
      hora: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, novaMensagem]);
    requestAnimationFrame(() => listRef.current?.scrollToEnd({ animated: true }));
  }

  return (
    <LinearGradient colors={[colors.gradientStart, colors.gradientMid, colors.gradientEnd]} style={styles.flex}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <ChatHeader nome={friend.nome} online={friend.online} />

        <FlatList
          ref={listRef}
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: false })}
          renderItem={({ item }) => <MessageBubble {...item} />}
        />

        <ChatInput onSend={handleSend} />
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  listContent: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 8, flexGrow: 1, justifyContent: 'flex-end' },
});