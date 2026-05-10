import { Stepper } from 'heroui-native-pro';
import { View } from 'react-native';

export default function MyComponent() {
  return (
    <View className="flex-1 justify-center bg-background p-4">
      <Stepper>
        <Stepper.Step>
          <Stepper.Rail />
          <Stepper.Content>
            <Stepper.Title>Account</Stepper.Title>
            <Stepper.Description>Create your account</Stepper.Description>
          </Stepper.Content>
        </Stepper.Step>
        <Stepper.Step>
          <Stepper.Rail />
          <Stepper.Content>
            <Stepper.Title>Profile</Stepper.Title>
            <Stepper.Description>Set up your profile</Stepper.Description>
          </Stepper.Content>
        </Stepper.Step>
      </Stepper>
    </View>
  );
}