<script setup>
import { loadFull } from "tsparticles";
import {useI18n} from "vue-i18n";
const { t } = useI18n()
import {ref, onMounted} from 'vue'
let cookiesSettingsFormActive = ref(false);
let cookiesCheck = ref(true);
const isMounted = ref(false);
//form variables
const analyticsConsent = ref(true);
const necessaryConsent = ref(true);
const functionalConsent = ref(true);
const performanceConsent = ref(true);
const marketingConsent = ref(true);
let cookieConsentPopUp = ref();
let overlay = ref();
onMounted(() => {
      isMounted.value = true;
  const consent = document.cookie.split('; ')
    .find(row => row.startsWith('cookie_consent='))
    ?.split('=')[1];

  if (consent === 'accepted' || consent === 'rejected') {
    cookiesCheck.value = false;
  }
   overlay.value = document.getElementsByClassName("overlay_cookies");
     cookieConsentPopUp.value = document.getElementsByClassName("cookie_consent_container");



});
function cookiesAccepted() {
    overlay.value[0].style.display = 'none';
    cookieConsentPopUp.value[0].style.display = 'none';
    const date = new Date()
    document.cookie = "cookie_consent=accepted; analytics=" + analyticsConsent.value + "; necessary=" + necessaryConsent.value + "; functional=" + functionalConsent.value + "; performance=" + performanceConsent.value + "; marketing=" + marketingConsent.value + "; path=/; consent_date=" + date + "; max-age=" + (60 * 60 * 24 * 180);
}
function cookiesDenied() {
    overlay.value[0].style.display = 'none';
    cookieConsentPopUp.value[0].style.display = 'none';
    const date = new Date()
    analyticsConsent.value = false;
    functionalConsent.value = false;
    performanceConsent.value = false;
    marketingConsent.value = false;
    document.cookie = "cookie_consent=rejected; analytics=" + analyticsConsent.value + "; necessary=" + necessaryConsent.value + "; functional=" + functionalConsent.value + "; performance=" + performanceConsent.value + "; marketing=" + marketingConsent.value + "; path=/; consent_date=" + date + "; max-age=" + (60 * 60 * 24 * 180);
}

const particlesInit = async (engine) => {
  await loadFull(engine);
};
</script>



<template>
    <div v-if="isMounted && cookiesCheck">
<div class="overlay_cookies">
</div>
<div class="cookie_consent_container ">
        <div v-if="!cookiesSettingsFormActive" class="cookie_consent_body ">
            <vue-particles
            id="cookies_body_particles"
                  :particlesInit="particlesInit"
                  :options="{
                    fullScreen: { enable: false },
            background: {
                        color: 'transparent',
            },
            particles: {
                number: {
                value: 150,
                density: {
                    enable: true,
                    area: 800,
                },
                },
                color: {
                value: '#fff',
                },
                shape: {
                type: 'circle',
                },
                opacity: {
                value: 1,
                random: true,
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.3,
                    sync: false,
                },
                },
                size: {
                value: { min: 0.5, max: 3 },
                random: true,
                },
                move: {
                enable: true,
                speed: 0.1,
                direction: 'none',
                random: true,
                straight: false,
                outModes: {
                    default: 'out',
                },
                },
            },
            interactivity: {
                events: {
                onHover: {
                    enable: true,
                    mode: 'bubble',
                },
                },
                modes: {
                bubble: {
                    distance: 100,
                    size: 4,
                    duration: 2,
                    opacity: 0.8,
              },
            },
          },
        }"
              />
            <div class="cookie_consent_text">
                <div class="cookie_consent_title">{{t('cookies.title')}}</div>
                {{t('cookies.cookiesContent')}}
                </div>
            <div class="cookie_consent_buttons_group">
                <div class="cookie_consent_button-agree_wrapper cookie_consent_buttons">
                    <v-btn
                    class="button button_cookie-consent background-color_button"
                    rounded
                    @click="cookiesAccepted"
                    >{{t('cookies.buttons.consent')}}</v-btn>
                </div>
                <div class="cookie_consent_button-disagree_wrapper cookie_consent_buttons ">
                    <v-btn
                    class="button_cookie-consent outlined_button"
                    rounded
                    variant="outlined"
                    @click="cookiesDenied"
                    >{{t('cookies.buttons.reject')}}</v-btn>
                </div>
                <div class="cookie_consent_button-change_wrapper cookie_consent_buttons ">
                    <v-btn
                    class="button_cookie-consent outlined_button"
                    rounded
                    variant="outlined"
                    @click="cookiesSettingsFormActive = !cookiesSettingsFormActive"
                    >{{t('cookies.buttons.change')}}</v-btn>
                </div>
            </div>



        </div>
        <div v-if="cookiesSettingsFormActive" class="cookie_consent_body cookie_consent_body-options-form">
            <vue-particles
            id="cookies_body_particles"
                  :particlesInit="particlesInit"
                  :options="{
                    fullScreen: { enable: false },
            background: {
                        color: 'transparent',
            },
            particles: {
                number: {
                value: 150,
                density: {
                    enable: true,
                    area: 800,
                },
                },
                color: {
                value: '#fff',
                },
                shape: {
                type: 'circle',
                },
                opacity: {
                value: 1,
                random: true,
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.3,
                    sync: false,
                },
                },
                size: {
                value: { min: 0.5, max: 3 },
                random: true,
                },
                move: {
                enable: true,
                speed: 0.1,
                direction: 'none',
                random: true,
                straight: false,
                outModes: {
                    default: 'out',
                },
                },
            },
            interactivity: {
                events: {
                onHover: {
                    enable: true,
                    mode: 'bubble',
                },
                },
                modes: {
                bubble: {
                    distance: 100,
                    size: 4,
                    duration: 2,
                    opacity: 0.8,
              },
            },
          },
        }"
              />
            <div class="cookie_consent_text">
                <div class="cookie_consent_title">{{t('cookies.adjust.title')}}</div>
                <div class="cookie_consent_title-text">{{t('cookies.adjust.content')}}</div>
                    <div class="cookie_consent_options-group">
                        <div class="cookie_consent_subtitle">{{t('cookies.adjust.subTitle')}}</div>
                        <v-expansion-panels>

                            <!--necessary-->
                            <v-expansion-panel elevation="0">
                                <v-expansion-panel-title class="cookie_consent_form-title-panel">{{t('cookies.adjustCategories.neccessary.title')}}
                                    <div class="cookie_constent_form-title-panel-switch">
                                    <v-switch
                                    v-model="necessaryConsent"
                                    hide-details
                                    inset
                                    class="ml-4 cookie_consent-disabled-switch"
                                    disabled
                                    @click="(e) => e.stopPropagation()"
                                    />
                                    </div>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text class="text">{{t('cookies.adjustCategories.neccessary.desc')}}</v-expansion-panel-text>
                            </v-expansion-panel>

                            <!--functional-->
                            <v-expansion-panel elevation="0">
                                <v-expansion-panel-title class="cookie_consent_form-title-panel">{{t('cookies.adjustCategories.functional.title')}}
                                    <div class="cookie_constent_form-title-panel-switch">
                                    <v-switch
                                    v-model="functionalConsent"
                                    hide-details
                                    inset
                                    color="var(--color)"
                                    class="ml-4 cookie_consent-switch"
                                    @click="(e) => e.stopPropagation()"
                                    />
                                    </div>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text class="text">{{t('cookies.adjustCategories.functional.desc')}}</v-expansion-panel-text>
                            </v-expansion-panel>

                            <!--analitics-->
                            <v-expansion-panel elevation="0">
                                <v-expansion-panel-title class="cookie_consent_form-title-panel">{{t('cookies.adjustCategories.analitics.title')}}
                                    <div class="cookie_constent_form-title-panel-switch">
                                    <v-switch
                                    v-model="analyticsConsent"
                                    hide-details
                                    inset
                                    color="var(--color)"
                                    class="ml-4 cookie_consent-switch"
                                    @click="(e) => e.stopPropagation()"
                                    />
                                    </div>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text class="text">{{t('cookies.adjustCategories.analitics.desc')}}</v-expansion-panel-text>
                            </v-expansion-panel>

                            <!--performance-->
                            <v-expansion-panel elevation="0">
                                <v-expansion-panel-title class="cookie_consent_form-title-panel">{{t('cookies.adjustCategories.performance.title')}}
                                    <div class="cookie_constent_form-title-panel-switch">
                                    <v-switch
                                    v-model="performanceConsent"
                                    hide-details
                                    inset
                                    color="var(--color)"
                                    class="ml-4 cookie_consent-switch"
                                    @click="(e) => e.stopPropagation()"
                                    />
                                    </div>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text class="text">{{t('cookies.adjustCategories.performance.desc')}}</v-expansion-panel-text>
                            </v-expansion-panel>

                            <!--marketing-->
                            <v-expansion-panel elevation="0">
                                <v-expansion-panel-title class="cookie_consent_form-title-panel">{{t('cookies.adjustCategories.adverts.title')}}
                                    <div class="cookie_constent_form-title-panel-switch">
                                    <v-switch
                                    v-model="marketingConsent"
                                    hide-details
                                    inset
                                    color="var(--color)"
                                    class="ml-4 cookie_consent-switch"
                                    @click="(e) => e.stopPropagation()"
                                    />
                                    </div>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text class="text">{{t('cookies.adjustCategories.adverts.desc')}}</v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>



                    </div>
            </div>
            <div class="cookie_consent_buttons_group">
                <div class="cookie_consent_button-agree_wrapper cookie_consent_buttons">
                    <v-btn
                    class="button button_cookie-consent background-color_button"
                    rounded
                    @click="cookiesAccepted"
                    >{{t('cookies.buttons.consent_change')}}</v-btn>
                </div>
                <div class="cookie_consent_button-change_wrapper cookie_consent_buttons ">
                    <v-btn
                    class="button_cookie-consent outlined_button"
                    rounded
                    variant="outlined"
                    @click="cookiesSettingsFormActive = !cookiesSettingsFormActive"
                    >{{t('cookies.buttons.discard')}}</v-btn>
                </div>
            </div>

        </div>
</div>
</div>
</template>
<style lang="scss" scoped>

html, body {
    margin: 0;
    padding: 0;
    height: 100%;
}
.overlay_cookies{
    opacity:0.7;
    background-color:black;
    background-size: 120% 120%;
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    width:100%;
    height:100%;
    z-index:10;
}
.cookie_consent_body{
    border-top:3px var(--color) solid;
    display:flex;
    min-width:100vw;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    opacity:1;
    z-index:10;
    min-height:40vh;
    max-height:40vh;
    width:100%;
    background-color:black;
}

.cookie_consent_body-options-form{
    min-height:60vh;
    max-height:60vh;
}


.cookie_consent_text{
    font-size:1.2rem;
    width:70%;
        overflow: auto;
        padding:32px;
}
.cookie_consent_buttons_group{
    display: flex;
    width: 30%;
    padding:32px;
    flex-direction: column;
    align-content: space-between;
    align-items: center;
    justify-content: center;

}
.cookie_consent_buttons{
    padding: 12px;
    display: flex;
    justify-content: center;
}
.cookie_consent_form-title-panel{
    font-size:1.3rem;
}
.button_cookie-consent{
    padding:23px;
        min-width: 200px;
        display: flex;
}
.cookie_consent_title{
    color:var(--main-color);
    font-weight: bold;
    font-size:1.6rem;
    padding-bottom:10px;
}
.cookie_consent_subtitle{
    padding-bottom:10px;
    font-size: 1.3rem;
    font-weight:bold;
    padding-top:10px;
}
.cookie_constent_form-title-panel-switch{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right:32px;
}

::v-deep(.cookie_consent-disabled-switch.v-input--disabled .v-switch__track) {
    background-color:var(--color)!important;
}
::v-deep(.cookie_consent-switch.v-input--disabled .v-switch__track) {
    background-color:var(--color)!important;
}
.cookie_consent-switch{
    overflow:hidden;
}
@media (min-width:1024px){
    ::v-deep(.v-expansion-panel-title__icon){
    overflow-x:hidden!important;
    }
}
@media(max-width:768px) {
    .cookie_consent_body{
        flex-direction: column;
        max-height:60vh;
    }

    .cookie_consent_text{
        width:100%;
        font-size:1.1rem;
    }
    .cookie_consent_buttons_group{
        width:100%;
        flex-direction: row;
        justify-content: space-between;
    }

}


@media(max-width:640px) {
    .cookie_consent_body{
        flex-direction: column;
        min-height:60vh;
    }

    .cookie_consent_text{
        width:100%;
    }
    .cookie_consent_buttons_group{
        width:100%;
        flex-direction: column;
        justify-content: space-between;
    }
    .cookie_consent_buttons{
        padding:7px;
    }

}


#cookies_body_particles{
    position:absolute;
    width:100vw;
    z-index:-1;
    height:100%;

}
.background-color_button{
    background-color: var(--color);
    transition: all 0.3s;
}
.outlined_button{
    transition: all 0.3s;
}
.outlined_button:hover{
    border-color: var(--color);
}

::v-deep(.v-selection-control__wrapper){
    overflow:hidden;
}
</style>