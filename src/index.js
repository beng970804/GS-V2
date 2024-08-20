import {Text} from '@/components/ui/text';
import {View} from '@/components/ui/view';

export const AppScreen = () => {
  return (
    <View className="h-full items-center justify-center">
      <Text className="font-heading text-sm text-error-700">text 1</Text>
      <Text className="font-body text-md text-error-700">text 2</Text>
      <Text className="font-mono text-md text-error-700">text 2</Text>
    </View>
  );
};
