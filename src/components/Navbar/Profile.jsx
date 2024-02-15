import { Menu } from "@headlessui/react";
import { Icon } from "../../Icons";

function Profile() {
  const user = {
    name: "Zehra Şeren",
    avatar: "/src/assets/profilephoto.jpg",
  };

  return (
    <Menu as="nav" className="relative">
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 pr-2 rounded-3xl ${
              open ? "bg-active" : "bg-black"
            } hover:bg-active`}
          >
            <img
              className="w-8 h-8 p-0.5 mr-2 rounded-full"
              src={user.avatar}
              alt=""
            />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={open && "rotate-180"}>
              <Icon name="downDir" size={16} />
            </span>
          </Menu.Button>
          <Menu.Items className="absolute top-full p-1 right-0 w-48 bg-active rounded translate-y-2">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="/account-settings"
                >
                  Hesap Ayarları
                  <Icon name="external" size={16} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="/account-settings"
                >
                  Profil
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="/account-settings"
                >
                  Çıkış
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default Profile;
