import { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { AuthInput } from '../../src/components/AuthInput';
import { AuthButton } from '../../src/components/AuthButton';
import { colors } from '../../src/theme/colors';
import { validateCadastro } from '../../src/lib/validation/validators';
import { maskPhone } from '../../src/lib/utils/mask';
import { register } from '../../src/services/authService';

export default function CadastroScreen() {
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
    <LinearGradient colors={[colors.gradientStart, colors.gradientMid, colors.gradientEnd]} style={styles.flex}>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <Pressable onPress={() => router.back()} style={styles.backButton} hitSlop={12}>
            <Ionicons name="arrow-back" size={22} color={colors.text} />
          </Pressable>

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

          <AuthButton label="Entrar" onPress={onSubmit} loading={loading} />

          <View style={styles.footer}>
            <Text style={styles.footerText}>Não tem uma conta? </Text>
            <Link href="/(auth)/login" style={styles.footerLink}>Entre</Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  scroll: { flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24, paddingTop: 60 },
  backButton: { position: 'absolute', top: 50, left: 20 },
  title: { fontSize: 32, fontWeight: '800', color: colors.text, textAlign: 'center', marginBottom: 28, letterSpacing: 2 },
  formError: { color: colors.error, textAlign: 'center', marginBottom: 12 },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  footerText: { color: colors.text, fontSize: 13 },
  footerLink: { color: colors.accent, fontSize: 13, fontWeight: '700' },
});