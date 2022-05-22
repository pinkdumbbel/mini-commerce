import { ProductFilterSelectIconSvg } from '../../pages/products/style';

interface ArrowIconProps {
  toggle: boolean;
}
const ArrowIcon: React.FC<ArrowIconProps> = ({ toggle }) => {
  return (
    <ProductFilterSelectIconSvg
      xmlns='http://www.w3.org/2000/svg'
      width='9px'
      height='6px'
      aria-labelledby={toggle ? 'open' : 'close'}
      fill='none'
      role='presentation'
      viewBox='0 0 9 6'
    >
      {toggle ? (
        <path d='M1 1L4.5 4.5L8 1' stroke='black'></path>
      ) : (
        <path d='M8 4.5L4.5 1L1 4.5' stroke='black'></path>
      )}
    </ProductFilterSelectIconSvg>
  );
};

export default ArrowIcon;
