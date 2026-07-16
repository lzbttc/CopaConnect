import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Pressable } from 'react-native';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthInput } from '../../src/components/AuthInput';
import { AuthButton } from '../../src/components/AuthButton';
import { ScreenBackground } from '../../src/components/common/ScreenBackground';
import { colors } from '../../src/theme/colors';
import { typography } from '../../src/theme/typography';
import { validateCadastro } from '../../src/lib/validation/validators';
import { maskPhone } from '../../src/lib/utils/mask';
import { register } from '../../src/services/authService';

export default function CadastroScreen() {
  const insets = useSafeAreaInsets();
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', senha: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  function setField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function onSubmit() {
    const validation = validateCadastro(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setFormError(null);
    setLoading(true);
    try {
      await register(form);
      router.replace('/(auth)/login');
    } catch (e) {
      setFormError(e instanceof Error ? e.message : 'Erro ao cadastrar');
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScreenBackground>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={[
            styles.scroll,
            { paddingTop: insets.top + 60, paddingBottom: insets.bottom + 24 },
          ]}
          keyboardShouldPersistTaps="handled"
        >
          <Pressable
            onPress={() => router.back()}
            style={[styles.backButton, { top: insets.top + 10 }]}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel="Voltar"
          >
            <Ionicons name="arrow-back" size={22} color={colors.text} />
          </Pressable>

          <View style={styles.card}>
            <Text style={styles.title}>CADASTRO</Text>

            <AuthInput
              placeholder="Nome" icon="person-outline" maxLength={50}
              value={form.nome} onChangeText={(v) => setField('nome', v)} error={errors.nome}
            />
            <AuthInput
              placeholder="Telefone" icon="call-outline" keyboardType="phone-pad"
              value={form.telefone} onChangeText={(v) => setField('telefone', maskPhone(v))} error={errors.telefone}
            />
            <AuthInput
              placeholder="E-mail" icon="mail-outline" keyboardType="email-address"
              value={form.email} onChangeText={(v) => setField('email', v)} error={errors.email}
            />
            <AuthInput
              placeholder="Senha" icon="lock-closed-outline" isPassword
              value={form.senha} onChangeText={(v) => setField('senha', v)} error={errors.senha}
            />

            {formError && <Text style={styles.formError}>{formError}</Text>}

            <AuthButton label="Cadastrar" onPress={onSubmit} loading={loading} />

            <View style={styles.footer}>
              <Text style={styles.footerText}>Já tem uma conta? </Text>
              <Link href="/(auth)/login" style={styles.footerLink}>Entre</Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  scroll: { flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24 },
  backButton: { position: 'absolute', left: 20, zIndex: 1 },
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 24,
    paddingVertical: 36,
  },
  title: {
    fontSize: typography.fontSize['6xl'],
    fontFamily: typography.fontFamily.brand,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 28,
    letterSpacing: 2,
  },
  formError: {
    color: colors.error,
    textAlign: 'center',
    marginBottom: 12,
    fontFamily: typography.fontFamily.regular,
  },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  footerText: {
    color: colors.text,
    fontSize: typography.fontSize.lg,
    fontFamily: typography.fontFamily.regular,
  },
  footerLink: {
    color: colors.accent,
    fontSize: typography.fontSize.lg,
    fontFamily: typography.fontFamily.semiBold,
  },
});