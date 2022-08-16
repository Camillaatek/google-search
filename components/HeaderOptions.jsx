import HeaderOption from "./HeaderOption";

function HeaderOptions() {
  return (
    <div>
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption />
      </div>
      {/* Right */}
      <div className="flex space-x-4">
        <p>Settings</p>
        <p>Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
