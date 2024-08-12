import {View} from '@/components/ui/view';
import {Text} from '@/components/ui/text';

export const AppScreen = () => {
  return (
    <View>
      <Text className="text-dxl text-error-700">text 1</Text>
      <Text className="text-error-700">text 2</Text>
      <Text className="text-dxl">text 3</Text>
    </View>
  );
};
