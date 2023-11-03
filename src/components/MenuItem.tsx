import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';

export type MenuItemProps = {
  label: string;
  active?: boolean;
} & LinkProps;

const MenuItem = (props: MenuItemProps) => {
  const { href, onClick, label, active } = props;

  const cn = classNames('text-lg text-center text-gray-500 hover:text-black', {
    'text-black': active ?? active,
  });

  return (
    <Link onClick={onClick} href={href} className={cn}>
      {label}
    </Link>
  );
};

export default MenuItem;
