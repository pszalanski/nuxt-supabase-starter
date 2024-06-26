<script setup lang="ts">
import {type SchemaSignUpValidation, signUpValidation} from '~/utils/formValidation'
import type {FormSubmitEvent} from '#ui/types'
import {BaseError, useErrorHandler} from '~/composables/use-error-handler'

definePageMeta({
  middleware: 'guest'
})

useSeoMeta({
  title: 'Sign Up - Nuxt Supabase Starter',
})

const {auth} = useSupabaseClient()
const {errorHandler} = useErrorHandler()

const form = reactive({
  email: undefined,
  password: undefined
})

const isLoading = ref(false)

/**
 * Sign up with credential.
 *
 * @param {FormSubmitEvent<SchemaSignUpValidation>} event - The form submit event.
 * @return {Promise<void>} A promise that resolves when the sign-up process is completed.
 */
const signUpWithCredential = async (event: FormSubmitEvent<SchemaSignUpValidation>) => {
  try {
    isLoading.value = true

    const signUp = await auth.signUp({
      email: form.email ?? '',
      password: form.password ?? ''
    })

    if (signUp.error) {
      throw new BaseError(signUp.error.status, signUp.error.message)
    }

    navigateTo('/dashboard')
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
    errorHandler(error as BaseError)
  }
}

/**
 * Sign up with the specified provider.
 *
 * @param {string} provider - The provider to sign up with (either 'GITHUB' or 'GOOGLE').
 * @return {Promise<void>} A promise that resolves when the sign-up process is complete.
 */
const signUpWithProvider = async (provider: 'GITHUB' | 'GOOGLE') => {
  try {
    isLoading.value = true

    let signUp = null

    if (provider === 'GITHUB') {
      signUp = await auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/confirm`
        }
      })
    }

    if (signUp?.error) {
      isLoading.value = false
      throw new BaseError(signUp.error.status, signUp.error.message)
    }

    navigateTo('/dashboard')
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
    errorHandler(error as BaseError)
  }
}
</script>

<template>
  <div>
    <div class="container mx-auto">
      <div class="flex h-[100vh] w-full justify-center items-center">
        <div class="w-10/12 md:w-8/12 lg:w-4/12 xl:w-3/12">
          <UCard>
            <UForm :schema="signUpValidation" :state="form" class="space-y-2"
                   @submit="signUpWithCredential">
              <div class="space-y-4">
                <div class="flex justify-center">
                  <img src="/icon.svg" class="h-[80px]">
                </div>

                <p class="text-lg font-bold text-center">Register an account by entering your email
                  and password.</p>

                <UFormGroup label="Email" name="email">
                  <UInput v-model="form.email"/>
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                  <UInput v-model="form.password" type="password"/>
                </UFormGroup>

                <UButton
                    :loading="isLoading"
                    :disabled="isLoading"
                    type="submit" label="Register" color="gray" block/>
              </div>
              <UDivider label="or" color="gray" orientation="vertical"/>

              <div class="space-y-4 flex flex-col justify-center">
                <UButton
                    @click="signUpWithProvider('GITHUB')"
                    :disabled="isLoading"
                    color="black" label="Continue with GitHub"
                    icon="i-lucide-github" block/>
              </div>
            </UForm>
          </UCard>

          <div class="flex items-center gap-2 justify-center mt-3">
            <p class="opacity-50">Already have an account?</p>
            <NuxtLink to="/sign-in" class="underline">Sign in</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>