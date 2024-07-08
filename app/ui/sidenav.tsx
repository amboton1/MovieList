import Image from "next/image";
import Link from "next/link";

export default function SideNav() {
  return (
      <>
        <div className="sidebar close">
            <ul className="nav-links">
                <li>
                    <Link className="margin-bottom-first logo" href="/movieslist/latest">
                        <Image src="/assets/logo.svg" width={32} height={32} alt="Home img" />
                    </Link>
                </li>
                <li>
                    <div className="icon-link">
                        <Link className="margin-bottom-equally" href="/movieslist/latest">
                            <Image src="/assets/icon-nav-home.svg" width={32} height={32} alt="Home img" />
                        </Link>
                        <i className='bx bxs-chevron-down arrow'></i>
                    </div>
                </li>
                <li>
                    <div className="icon-link">
                        <Link className="margin-bottom-equally" href="/movieslist/allmovies">
                            <Image src="/assets/icon-nav-movies.svg" width={32} height={32} alt="Home img" />
                        </Link>
                        <i className='bx bxs-chevron-down arrow'></i>
                    </div>
                </li>
                <li>
                    <div className="icon-link">
                        <Link className="margin-bottom-equally" href="/movieslist/tvshows">
                            <Image src="/assets/icon-nav-tv-series.svg" width={32} height={32} alt="Home img" />
                        </Link>
                        <i className='bx bxs-chevron-down arrow'></i>
                    </div>
                </li>
                <li>
                    <Link className="margin-bottom-equally" href="/bookmarks">
                        <Image src="/assets/icon-nav-bookmark.svg" width={32} height={32} alt="Home img" />
                    </Link>
                </li>
                <li>
                    <div className="profile-details">
                        <div className="profile-content">
                            <img src="https://sachinsamal.netlify.app/static/media/sachin-samal.d451ea9b3c53ed984bf7.png" alt="profileImg" />
                        </div>
                        <div className="name-job">
                            <div className="profile_name">John Doe</div>
                            <div className="job">Crypto Expert</div>
                        </div>
                        <i className='bx bx-log-out'></i>
                    </div>
                </li>
            </ul>
            </div>
        </>
  );
}
