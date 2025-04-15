import { useNavigate } from "react-router-dom";

import { 
  BackgroundImage, 
  Body, 
  DirectoryItemContainer 
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageurl, title, route } = category;
  const navigate = useNavigate(route);

  const onNavigateHandler = () => navigate(route);
  console.log('image: ' , imageurl);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageurl={imageurl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
