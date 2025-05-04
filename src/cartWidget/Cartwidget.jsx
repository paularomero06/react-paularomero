import * as React from 'react';
import { useContext } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../CartComponents/CartContext';
import { Link } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/carrito" style={{ color: 'inherit', textDecoration: 'none' }}>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={totalQuantity} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Link>
  );
}
