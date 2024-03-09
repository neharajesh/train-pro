export const Header = () => {
  return (
    <header className="flex justify-between px-8 py-6">
      <a href="/">Train Pro</a>
      <div className="flex gap-4">
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
