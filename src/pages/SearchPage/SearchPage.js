import React from "react";
import { Link } from "react-router-dom";
import RoomIcon from "@material-ui/icons/Room";
import ImageIcon from "@material-ui/icons/Image";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import DescriptionIcon from "@material-ui/icons/Description";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import "./SearchPage.css";
import Search from "../../components/Search/Search";
import { useStateValue } from "../../store/StateProvider";
import useGoogleSearch from "../../utils/useGoogleSearch";

function SearchPage() {
	const [{ term }, dispatch] = useStateValue();
	const { data } = useGoogleSearch(term);

	return (
		<div className="searchPage">
			<div className="searchPage__header">
				<Link to="/">
					<img
						alt="Google"
						className="searchPage__logo"
						src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
					/>
				</Link>

				<div className="searchPage__headerBody">
					<Search hideButtons />

					<div className="searchPage__options">
						<div className="searchPage__optionsLeft">
							<div className="searchPage__option">
								<SearchIcon />
								<Link to="#">All</Link>
							</div>
							<div className="searchPage__option">
								<DescriptionIcon />
								<Link to="#">News</Link>
							</div>
							<div className="searchPage__option">
								<ImageIcon />
								<Link to="#">Images</Link>
							</div>
							<div className="searchPage__option">
								<LocalOfferIcon />
								<Link to="#">Shopping</Link>
							</div>
							<div className="searchPage__option">
								<RoomIcon />
								<Link to="#">Maps</Link>
							</div>
							<div className="searchPage__option">
								<MoreVertIcon />
								<Link to="#">More</Link>
							</div>
						</div>

						<div className="searchPage__optionsRight">
							<div className="searchPage__option">
								<Link to="#">Settings</Link>
							</div>
							<div className="searchPage__option">
								<Link to="#">Tools</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResuls} results
            ({data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map(item => (
            <div className="searchPage__result">
              <a href={item.link} className="searchPage__resultHeader">
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                  <img className="searchPage__resultImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt=""/>
                )}
                {item.displayLink} <ArrowDropDownIcon fontSize="large" />
              </a>

              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>

              <p className="searchPage__resultSnippet" href={item.link}>
                {item.snippet}
              </p>
            </div>
          ))}
        </div>
      )}
		</div>
	);
}

export default SearchPage;
