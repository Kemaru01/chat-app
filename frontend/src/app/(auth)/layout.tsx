export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full dark">
      <section className="h-full flex flex-col items-center justify-center dark:bg-gray-950">
        {children}
      </section>
    </main>
  );
}
