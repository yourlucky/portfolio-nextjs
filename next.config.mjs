/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // React의 Strict Mode 활성화= Grammary 비활성화
    async rewrites() {
        return [
            // 가계부 앱 — leo-na.com/ledger 요청을 Vercel의 book-account 앱으로 프록시
            {source: "/ledger", destination: "https://book-account-six.vercel.app/ledger"},
            {source: "/ledger/:path*", destination: "https://book-account-six.vercel.app/ledger/:path*"},
        ];
    },
};

export default nextConfig;
