import Head from 'next/head';
import Services from './Services';

export default function ServicesMainPage() {
    return (
        <div>
            <Head>
                <title>My Sustainability App</title>
                <meta name="description" content="Services that pave your path towards sustainability" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Services />
            </main>
        </div>
    );
}
