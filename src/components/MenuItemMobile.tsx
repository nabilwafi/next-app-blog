import classNames from 'classnames';
import Link from 'next/link';
import { MenuItemProps } from './MenuItem';

const MenuItemMobile = (props: MenuItemProps) => {
  const { href, onClick, label, active } = props;

  const cn = classNames(
    'p-2 hover:bg-gray-100 active:text-blue-500 rounded-lg',
    {
      'text-blue-500': active ?? active,
    },
  );

  return (
    <Link onClick={onClick} href={href} className={cn}>
      {label}
    </Link>
  );
};

export default MenuItemMobile;
