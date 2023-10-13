<template>
    <div class="footer">
        <div class="footer__info">
            <!-- contact -->
            <div class="footer__info__contact">
                <div class="column" style="width: 100%;box-sizing: border-box;gap: 4px;align-items: flex-start">
                    <!-- logo -->
                    <div class="row" style=";width: 100%;box-sizing: border-box;">
                        <img alt="logo-unicloud" src="/icons/ic-logo-unicloud.svg" style="width: 120px;height: 90px;" />
                    </div>
                    <!-- company name -->
                    <span
                        style="text-align: start;color: #EBF5FF;font-size: 18px;line-height: 30px;font-weight: 500;border-bottom: 0.5px solid #3F5EA5;padding-bottom: 16px;">Công
                        ty cổ phần tập đoàn công nghệ quốc tế Unicloud</span>
                </div>
                <!-- address -->
                <div class="column"
                    style="align-items: flex-start;width: 100%;box-sizing: border-box;gap: 8px;color: #E1EFFE;font-size: 14px;line-height: 20px;font-weight: 400;">
                    <span>Trụ sở chính: Tầng 10, Toà nhà Sunshine Center, Số 16 Phạm Hùng, Hà Nội</span>
                    <span>CN TP.HCM: Block 5, Lô I-3B-1, Đường N6, Khu Công Nghệ Cao, Phường Tân Phú, Thành phố Thủ Đức,
                        Thành phố Hồ Chí Minh</span>
                    <span>Hotline: 19006054</span>
                    <span>Email: info@unicloud.com.vn</span>
                    <span>Website: https://www.unicloud.com.vn/vi/</span>

                </div>
            </div>

            <!-- info -->
            <div class="footer__info__introduction">
                <ItemFooterInfo key="about paybox" title="Về PayBox" :data="dataAboutPayBox" />
                <ItemFooterInfo key="support" title="Hỗ trợ" :data="dataSupport" />
                <div class="column" style="width: 100%;box-sizing: border-box;gap: 16px;align-items: flex-start;">
                    <span style="color: #A4CAFE;font-size: 14px;line-height: 20px;font-weight: 600;">Liên kết nhanh</span>
                    <div class="row" style="width: 100%;gap: 10px;">
                        <a href="#" target="_blank" rel="noopener noreferrer" style="text-decoration: none;width: 24px;height: 24px;">
                            <img style="width: 24px;height: 24px;" alt="facebook" src="/icons/ic-facebook.svg" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" style="text-decoration: none;width: 24px;height: 24px;">
                            <img alt="youtube" src="/icons/ic-youtube.svg" />

                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" style="text-decoration: none;width: 24px;height: 24px;">
                            <img alt="zalo" src="/icons/ic-zalo.svg" />

                        </a>

                    </div>
                </div>
                <ItemFooterInfo key="product" title="Sản phẩm" :data="dataProduct" />
                <ItemFooterInfo key="infomation" title="Thông tin" :data="dataInfo" />
            </div>
        </div>

        <!-- copy right -->
        <span class="footer__copy-right">
            {{ runtimeConfig.NUXT_APP_FOOTER_COPY_RIGHT }}
        </span>
    </div>
</template>

<script setup lang="ts">
const dataAboutPayBox = ref([
    {
        title: "Trang chủ",
        link: 'https://www.unicloud.com.vn/vi/about-us',
    },
    {
        title: "Về chúng tôi",
        link: '',
    },
    {
        title: "Đặt hàng",
        link: '',
    },
    {
        title: "Tin tức",
        link: '',
    }
]);
const dataProduct = ref([
    {
        title: "Paybox Pro",
        link: 'https://www.unicloud.com.vn/vi/about-us',
    },
    {
        title: "Paybox Mini",
        link: '',
    },
    {
        title: "Paybox lite",
        link: '',
    },
    {
        title: "Paybox Pico",
        link: '',
    },
    {
        title: "Paybox Portal",
        link: '',
    }
]);
const dataSupport = ref([
    {
        title: "Liên hệ",
        link: 'https://www.unicloud.com.vn/vi/about-us',
    },
    {
        title: "Hướng dẫn sử dụng",
        link: '',
    },
    {
        title: "Câu hỏi thường gặp",
        link: '',
    }
]);
const dataInfo = ref([
    {
        title: "Điều khoản sử dụng",
        link: '',
    },
    {
        title: "Chính sách bảo mật",
        link: 'https://www.unicloud.com.vn/vi/about-us',
    },

]);
const runtimeConfig = useRuntimeConfig();
</script>

<style scoped>
.footer {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 64px 64px 48px 64px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 64px;
    background-color: #1F2A37;
}

.footer__copy-right {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    justify-content: flex-start;
    padding: 32px 32px 8px 32px;
    align-items: flex-start;
    gap: 32px;
    border-top: 1px solid #3F5EA5;
    color: #C3DDFD;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    text-align: start;
}

.footer__info {
    width: 100%;
    box-sizing: border-box;
    padding: 0px 32px;
    background-color: transparent;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
}

.footer__info__introduction {
    width: 100%;
    box-sizing: border-box;
    padding: 0px;
    background-color: transparent;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
}

.footer__info__contact {
    width: 100%;
    box-sizing: border-box;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
}

@media only screen and (max-width: 820px) {
    .footer {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        padding: 64px 16px 48px 16px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 64px;
        background-color: #1F2A37;
    }

    .footer__info {
        width: 100%;
        box-sizing: border-box;
        padding: 0px 16px;
        background-color: transparent;
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
    }

    .footer__info__introduction {
        width: 100%;
        box-sizing: border-box;
        padding: 0px;
        background-color: transparent;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
    }
}

@media only screen and (max-width: 576px) {
    .footer {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        padding: 64px 16px 48px 16px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 64px;
        background-color: #1F2A37;
    }

    .footer__info {
        width: 100%;
        box-sizing: border-box;
        padding: 0px 0px;
        background-color: transparent;
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
    }

    .footer__info__introduction {
        width: 100%;
        box-sizing: border-box;
        padding: 0px;
        background-color: transparent;
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
    }
}
</style>