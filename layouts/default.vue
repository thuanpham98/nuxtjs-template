<template>
    <section class="layout">
        <nav class="wrap-navigation">
            <div class="navigation">
                <!-- logo -->
                <img alt="logo" src="/images/img-logo-paybox.svg" />

                <!-- list link -->
                <div class="navigation__list-links">
                    <NuxtLink active-class="navigation__list-links__nav-link--active" class="navigation__list-links__nav-link" :to="localePath('/')">Về chúng tôi</NuxtLink>
                    <NuxtLink active-class="navigation__list-links__nav-link--active" class="navigation__list-links__nav-link" :to="localePath('/order')">Đặt hàng</NuxtLink>
                    <NuxtLink active-class="navigation__list-links__nav-link--active" class="navigation__list-links__nav-link" :to="localePath('/news')">Tin tức</NuxtLink>

                    <!-- <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                        </a>

                        <ul style="right: 0; left: auto;" class="dropdown-menu dropdown-menu-start"
                            aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div> -->
                    <ChangeLanguageButton/>
                    <button class="button-primary">
                        Đăng nhập
                    </button>
                </div>

                <!-- hammbuger button -->
                <div class="navigation__hambuger-button">
                    <img src="/icons/ic-hambuger.svg" />
                </div>
            </div>
        </nav>
        <main class="layout__main">
            Some default layout shared across all pages
            <slot />
            <div style="width: 100%;box-sizing: border-box;height: 1000px;background-color: red;" />
        </main>
        <Footer/>
        
    </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
// const { locale } = useI18n();

</script>

<!-- <script lang="ts">

</script> -->

<script lang="ts">
export default {
    async mounted() {
        if (typeof window !== 'undefined') {
            window && window.addEventListener('scroll', this.handleScroll);
        }
    },

    unmounted() {
        window && window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(event: any) {
        },
    }
}
</script>

<style>
.layout {
    display: flex;
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    overflow: auto;
}

.layout__main {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 89px;
}

.wrap-navigation {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 16px 24px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 24px;
    position: fixed;
    top: 0px;
    left: 0px;
    /* box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.15); */
    backdrop-filter: blur(6px);
}

.navigation {
    display: flex;
    flex-direction: row;
    width: 80%;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
}

.navigation__list-links {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
}

.navigation__list-links__nav-link {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    height: fit-content;
    padding: 4px 0px;
    color: #1F2A37;
    cursor: pointer;
    text-decoration: none;
}

.navigation__list-links__nav-link--active{
    color:#1C64F2;
}

.navigation__hambuger-button {
    display: none;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
}

.dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0;
}



@media only screen and (max-width: 1024px) {
    .navigation {
        display: flex;
        flex-direction: row;
        width: 100%;
        box-sizing: border-box;
        justify-content: space-between;
        gap: 24px;
    }
}

@media only screen and (max-width: 820px) {
    .wrap-navigation {
        background-color: white;
        padding: 16px 16px;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }

    .navigation__list-links {
        display: none;
    }

    .navigation__hambuger-button {
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
    .footer {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        padding: 64px 32px 48px 32px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 64px;
        background-color: #1F2A37;
    }
}
</style>