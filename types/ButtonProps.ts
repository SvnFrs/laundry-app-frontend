export interface ButtonProps {
    destination?: any;
    label?: string;
    width?: number;
    flex?: number;
    icon?: any;
    iconColor?: string;
    buttonColor?: string;
    textColor?: string;
    boldLabel?: string;
    regularLabel?: string;
    selected?: boolean;
    onPress?: () => void;
    additionalInfo?: string;
}
