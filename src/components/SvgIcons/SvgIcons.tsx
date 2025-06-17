import { CustomIconRef, CustomRefEnum } from './IconRef';

interface Props {
  name: CustomRefEnum;
  baseClassname: string;
}

function SvgIcons(props: Props) {
  const { name, baseClassname } = props;

  const CustomIcon = CustomIconRef[name];

  return (
    <div className={baseClassname}>
      <CustomIcon />
    </div>
  );
}

export default SvgIcons;
