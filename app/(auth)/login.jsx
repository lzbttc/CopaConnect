import { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, router } from 'expo-router';
import { AuthInput } from '../../src/components/AuthInput';
import { AuthButton } from '../../src/components/AuthButton';
import { colors } from '../../src/theme/colors';
import { validateLogin } from '../../src/lib/validation/validators';
import { login } from '../../src/services/authService';

export default function LoginScreen() {
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
      router.replace('/'); // TODO: substituir pela rota da tela inicial (Etapa 2)
    } catch (e) {
      setFormError(e instanceof Error ? e.message : 'Erro ao entrar');
    } finally {
      setLoading(false);
    }
  }

  return (
    <LinearGradient colors={[colors.gradientStart, colors.gradientMid, colors.gradientEnd]} style={styles.flex}>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>LOGIN</Text>

          <AuthInput
            placeholder="E-mail" icon="mail-outline" keyboardType="email-address"
            value={form.email} onChangeText={(v) => setField('email', v)} error={errors.email}
          />
          <AuthInput
            placeholder="Senha" icon="lock-closed-outline" isPassword
            value={form.senha} onChangeText={(v) => setField('senha', v)} error={errors.senha}
          />

          <Pressable onPress={() => {/* TODO: fluxo de recuperação de senha (fora do escopo atual) */}}>
            <Text style={styles.forgotLink}>Esqueceu a senha?</Text>
          </Pressable>

          {formError && <Text style={styles.formError}>{formError}</Text>}

          <AuthButton label="Entrar" onPress={onSubmit} loading={loading} />

          <View style={styles.footer}>
            <Text style={styles.footerText}>Não tem uma conta? </Text>
            <Link href="/(auth)/cadastro" style={styles.footerLink}>Cadastre-se</Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  scroll: { flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24 },
  title: { fontSize: 34, fontWeight: '800', color: colors.text, textAlign: 'center', marginBottom: 32, letterSpacing: 2 },
  forgotLink: { color: colors.accent, fontSize: 13, fontWeight: '600', marginBottom: 24 },
  formError: { color: colors.error, textAlign: 'center', marginBottom: 12 },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  footerText: { color: colors.text, fontSize: 13 },
  footerLink: { color: colors.accent, fontSize: 13, fontWeight: '700' },
});