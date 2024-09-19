import { useTheme } from '@/components/theme-provider'
import { Avatar, Button, Menu } from '@/components/ui'
import { Aside } from '@/components/ui/aside'
import { Link } from '@inertiajs/react'
import { FlashMessage } from 'components/flash-message'
import { Footer } from 'components/footer'
import {
    IconBell,
    IconBook,
    IconBrandJustd,
    IconChevronLgDown,
    IconCirclePerson,
    IconCreditCard,
    IconDashboard,
    IconEnvelope,
    IconLogout,
    IconMessage,
    IconMoon,
    IconSearch,
    IconSettings,
    IconShield,
    IconSun,
    IconSupport
} from 'justd-icons'
import type { PropsWithChildren } from 'react'

export function AppLayout({ children }: PropsWithChildren) {
    const { theme, setTheme } = useTheme()

    return (
        <>
            <Aside.Layout
                navbar={
                    <Aside.Responsive>
                        <Button aria-label="Inbox" appearance="plain" shape="circle" size="square-petite">
                            <IconBell />
                        </Button>
                        <Button aria-label="Search" appearance="plain" shape="circle" size="square-petite">
                            <IconSearch />
                        </Button>
                        {/*<ThemeSwitcher />*/}
                        <Menu>
                            <Button
                                appearance="plain"
                                size="square-petite"
                                shape="circle"
                                aria-label="Profile"
                                className="group"
                            >
                                <Avatar size="medium" src="https://github.com/yuxxeun.png" />
                            </Button>
                            <Menu.Content placement="top" className="min-w-[--trigger-width]">
                                <Menu.Item href={route('profile.edit')}>
                                    <IconCirclePerson />
                                    Profile
                                </Menu.Item>
                                <Menu.Item href="#">
                                    <IconSettings />
                                    Settings
                                </Menu.Item>
                                <Menu.Item href="#">
                                    <IconShield />
                                    Security
                                </Menu.Item>
                                <Menu.Separator />
                                <Menu.Item href="#">
                                    <IconBook />
                                    Documentation
                                </Menu.Item>
                                <Menu.Item href="#">
                                    <IconSupport />
                                    Contact Support
                                </Menu.Item>
                                <Menu.Separator />
                                <Menu.Item>
                                    <Link method="post" href={route('logout')}>
                                        <IconLogout />
                                        Log out
                                    </Link>
                                </Menu.Item>
                            </Menu.Content>
                        </Menu>
                    </Aside.Responsive>
                }
                aside={
                    <>
                        <Aside.Header>
                            <Link className="flex items-center gap-x-2" href={route('dashboard')}>
                                <IconBrandJustd />
                                <strong>Mesh</strong>
                            </Link>
                        </Aside.Header>
                        <Aside.Content>
                            <Aside.Section>
                                <Aside.Item isCurrent icon={IconDashboard} href={route('dashboard')}>
                                    Dahboard
                                </Aside.Item>
                                <Aside.Item icon={IconCreditCard} href="#">
                                    Articles
                                </Aside.Item>
                                <Aside.Item icon={IconSettings} href="#">
                                    Settings
                                </Aside.Item>
                                <Aside.Item icon={IconEnvelope} href="#" badge="49.67K">
                                    Newsletter
                                </Aside.Item>
                                <Aside.Item icon={IconMessage} href="#" badge={35}>
                                    Messages
                                </Aside.Item>
                            </Aside.Section>
                            <Aside.Section title="Projects" items={projects}>
                                {(item) => (
                                    <Aside.Item id={item.name} href={item.href}>
                                        {item.name}
                                    </Aside.Item>
                                )}
                            </Aside.Section>
                        </Aside.Content>
                        <Aside.Footer className="lg:flex lg:flex-row hidden items-center">
                            <Menu>
                                <Button
                                    appearance="plain"
                                    aria-label="Profile"
                                    className="group w-full justify-start flex"
                                >
                                    <Avatar
                                        size="extra-small"
                                        shape="square"
                                        className="-ml-1.5"
                                        src="https://github.com/yuxxeun.png"
                                    />
                                    yuxxeun
                                    <IconChevronLgDown className="right-3 absolute group-pressed:rotate-180 transition-transform" />
                                </Button>
                                <Menu.Content placement="top" className="min-w-[--trigger-width]">
                                    <Menu.Item href={route('profile.edit')}>
                                        <IconCirclePerson />
                                        Profile
                                    </Menu.Item>
                                    <Menu.Item href="#">
                                        <IconSettings />
                                        Settings
                                    </Menu.Item>
                                    <Menu.Item href="#">
                                        <IconShield />
                                        Security
                                    </Menu.Item>
                                    <Menu.Separator />
                                    <Menu.Item onAction={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                                        {theme === 'light' ? <IconMoon /> : <IconSun />}
                                        Preferences
                                    </Menu.Item>
                                    <Menu.Separator />
                                    <Menu.Item>
                                        <Link
                                            method="post"
                                            href={route('logout')}
                                            className="w-full flex gap-1 items-center"
                                        >
                                            <IconLogout />
                                            Log out
                                        </Link>
                                    </Menu.Item>
                                </Menu.Content>
                            </Menu>
                        </Aside.Footer>
                    </>
                }
            >
                <main className="relative">
                    <FlashMessage />
                    {children}
                    <Footer />
                </main>
            </Aside.Layout>
        </>
    )
}

const projects = [{ name: 'Website Redesign', href: '#' }]
