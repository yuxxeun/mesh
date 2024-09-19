import { Head } from '@inertiajs/react'
import { Container } from 'components/container'
import { Header } from 'components/header'
import { Logo } from 'components/logo'
import { AppLayout } from 'layouts'
import { Link } from 'ui'

export default function Home() {
    return (
        <>
            <Head title="Dashboard" />
            <Header title="Dashboard" />
            <Container>
                <div className="overflow-hidden rounded-lg border lg:border-border border-transparent">
                    <div>
                        <div className="sm:p-20">
                            <Link
                                href="https://getjustd.com"
                                target="_blank"
                                className="grid place-content-center size-12 outline-1 outline-border rounded-full"
                            >
                                <Logo className="block size-7" />
                            </Link>
                            <div className="max-w-2xl mb-8">
                                <div className="mt-6 text-xl sm:text-2xl">
                                    Laravel application with Inertia and React Typescript!
                                </div>
                                <div className="mt-4 text-muted-fg sm:text-lg">
                                    This is a Laravel application with Inertia and React Typescript. It is a work in
                                    progress. If you have any questions or suggestions, please feel free to contact me.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

Home.layout = (page: any) => <AppLayout children={page} />
