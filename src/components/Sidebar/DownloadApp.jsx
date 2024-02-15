import { Icon } from "../../Icons";

function DownloadApp() {
  return (
    <a className="h-10 px-6 gap-x-4 flex flex-shrink-0 items-center text-sm font-semibold text-link hover:text-white">
      <Icon name="download" size={20} />
      Uygulamayı Yükle
    </a>
  );
}

export default DownloadApp;
