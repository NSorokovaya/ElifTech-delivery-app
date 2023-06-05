 import { MenuCardContainer, MenuCardTitle } from './menuCard.styled';

export const MenuCard = ({ _id, title, thumb }) => {
  return (
    <div>
      <MenuCardContainer>
          <img src={thumb} alt={title} height={323} width={300} />
        
        <MenuCardTitle>
          <p title={title}>{title}</p>
        </MenuCardTitle>
      </MenuCardContainer>
    </div>
  );
};

export default MenuCard;