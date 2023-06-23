import Link from 'next/link';


const navigationItems = [
    { id: 1, title: 'Спектр защиты', link: '#spectr' },
    { id: 2, title: 'Группы риска', link: '#risk_groups' },
    { id: 3, title: 'Частые вопросы', link: '#faq' },
    { id: 4, title: 'Истории пациентов', link: '#' },
];

const MobNavigation = () => {
    return (
        <ul className="py-16 px-5 grid items-center text-center text-blue text-lg mt-5">
            {navigationItems.map(item => (
                <li key={item.id} onClick={() => showMenu(false)} className="pb-5">
                    <Link href={item.link}>{item.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default MobNavigation;