import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Pressable } from 'react-native';
import { Link, router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthInput } from '../../src/components/AuthInput';
import { AuthButton } from '../../src/components/AuthButton';
import { ScreenBackground } from '../../src/components/common/ScreenBackground';
import { colors } from '../../src/theme/colors';
import { typography } from '../../src/theme/typography';
import { validateLogin } from '../../src/lib/validation/validators';
import { login } from '../../src/services/authService';

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const [form, setForm] = useState({ email: '', senha: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  function setField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function onSubmit() {
    const validation = validateLogin(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setFormError(null);
    setLoading(true);
    try {
      await login(form);
      router.replace('/(tabs)');
    } catch (e) {
      setFormError(e instanceof Error ? e.message : 'Erro ao entrar');
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
            { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 },
          ]}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            <Text style={styles.title}>LOGIN</Text>

            <AuthInput
              placeholder="E-mail" icon="mail-outline" keyboardType="email-address"
              value={form.email} onChangeText={(v) => setField('email', v)} error={errors.email}
            />
            <AuthInput
              placeholder="Senha" icon="lock-closed-outline" isPassword
              value={form.senha} onChangeText={(v) => setField('senha', v)} error={errors.senha}
            />

            <Pressable onPress={() => {/* TODO: recuperar senha */}}>
              <Text style={styles.forgotLink}>Esqueceu a senha?</Text>
            </Pressable>

            {formError && <Text style={styles.formError}>{formError}</Text>}

            <AuthButton label="Entrar" onPress={onSubmit} loading={loading} />

            <View style={styles.footer}>
              <Text style={styles.footerText}>Não tem uma conta? </Text>
              <Link href="/(auth)/cadastro" style={styles.footerLink}>Cadastre-se</Link>
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
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 24,
    paddingVertical: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: typography.fontSize['6xl'],
    fontFamily: typography.fontFamily.brand,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 32,
    letterSpacing: 2,
  },
  forgotLink: {
    color: colors.accent,
    fontSize: typography.fontSize.lg,
    fontFamily: typography.fontFamily.regular,
    marginBottom: 24,
    textAlign: 'left',
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