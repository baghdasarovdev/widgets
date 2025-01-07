import { Header } from '@/layout/header/Header';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="overflow-hidden pb-1">{children}</div>
    </>
  );
}
