import {ChevronDownIcon, Icon} from '@/components/ui/icon';
import {Menu, MenuItem, MenuItemLabel} from '@/components/ui/menu';
import {Text} from '@/components/ui/text';
import {View} from '@/components/ui/view';

export const AppScreen = () => {
  return (
    <View className="h-full items-center justify-center">
      <Text className="font-heading text-sm text-error-700">text 1</Text>
      <Text className="font-body text-md text-error-700">text 2</Text>
      <Text className="font-mono text-md text-error-700">text 2</Text>
      <Menu
        offset={5}
        trigger={({...triggerProps}) => {
          return (
            <Icon as={ChevronDownIcon} className="m-2 h-4 w-4 text-error-500" />
          );
        }}>
        <MenuItem
          key="Membership"
          textValue="Membership"
          className="justify-between p-2">
          <MenuItemLabel size="sm">Membership</MenuItemLabel>
        </MenuItem>
      </Menu>
    </View>
  );
};
