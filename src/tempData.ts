import LinkGroup from "./LinkGroup";

interface LKS {
  name: string;
  href: string;
  isrc: string;
}

interface TLK {
  [key:string]: LKS[];
}

type TNS = "動画共有サービス" | "九工大" | "Google" | "その他";

export default function LoadTempLinks(){
  const links:TLK = {
    "動画共有サービス": [
      {
        name: "YouTube",
        href: "https://www.youtube.com/",
        isrc: "https://www.youtube.com/s/desktop/63cd44b2/img/favicon_144x144.png",
      },
      {
        name: "ニコニコ動画",
        href: "http://www.nicovideo.jp/",
        isrc: "https://nicovideo.cdn.nimg.jp/uni/images/favicon/144.png?re",
      },
      {
        name: "ニコニコ解析",
        href: "http://www.nicovideo.me/",
        isrc: "https://pbs.twimg.com/profile_images/661972157556088832/nVRZPubX_400x400.png",
      },
    ],
    "九工大": [
      {
        name: "九工大",
        href: "https://www.kyutech.ac.jp/",
        isrc: "https://cache1.jimu.kyutech.ac.jp/archives/001/201602/19ad386ab0b32d0c82bc9ef3daf7f1e0.gif",
      },
      {
        name: "九工大情報工学部",
        href: "https://www.iizuka.kyutech.ac.jp/",
        isrc: "https://www.iizuka.kyutech.ac.jp/kit/wp-content/uploads/2018/03/logo_jpeg1.jpg",
      },
      {
        name: "LiveCampus",
        href: "https://virginia.jimu.kyutech.ac.jp/",
        isrc: "",
      },
      {
        name: "Moodle",
        href: "https://ict-i.el.kyutech.ac.jp/my/",
        isrc: "https://cdn.icon-icons.com/icons2/2415/PNG/512/moodle_original_logo_icon_146420.png",
      },
    ],
    "Google": [
      {
        name: "Googleホーム",
        href: "https://www.google.com/",
        isrc: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
      },
      {
        name: "Googleドライブ",
        href: "https://drive.google.com/drive/u/0/my-drive",
        isrc: "https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png",
      },
      {
        name: "Googleフォト",
        href: "https://photos.google.com/?tab=oq&pageId=none",
        isrc: "https://www.google.com/photos/about/static/images/ui/logo-photos.png",
      },
    ],
    "その他": [
      {
        name: "Twitter",
        href: "https://twitter.com/",
        isrc: "https://news.mynavi.jp/article/20210708-1918224/images/002.jpg",
      },
      {
        name: "Gmail",
        href: "https://mail.google.com/mail/#inbox",
        isrc: "https://lh3.googleusercontent.com/8v_oGMOj9bgohn50RgLhJ8XGZ2kIUdr0RG4zCkIYnfjK24ORS0WFaTWmnzxXzagUg2fwAmDy1W_Y4oTtIacT2dhQzAqOy5H9Vg23Rq1oVnhUGtOynjY",
      },
    ],
  };

  let groups: {[key: string]: LinkGroup} = {};

  for(let name in links){
    if(groups[name]){
      // すでに存在
      links[name].forEach(l=>groups[name].addLink(l.href))
    }
    else{
      groups[name] = new LinkGroup(name);
      links[name].forEach(l=>groups[name].addLink(l.href))
    }
  }

  return groups;
}