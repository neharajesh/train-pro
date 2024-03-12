export const Header = () => {
  return (
    <header className="flex justify-between px-8 py-6 border-b border-slate-100">
      <a href="/"> Train Pro</a>
      <div className="flex gap-8">
        <a href="/clients">Clients</a>
        <a href="/checkin">Check In</a>
        <a href="/library">Library</a>
      </div>
      <div>
        <p>Login</p>
      </div>
    </header>
  );
};
