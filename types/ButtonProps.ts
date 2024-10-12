export interface ButtonProps {
    destination?: any; // Change to string for href compatibility
    label?: string;
    width?: number;
    flex?: number;
    icon?: any;
    color: string;
    iconColor?: string;
    buttonColor?: string;
    textColor?: string;
    boldLabel?: string;
    regularLabel?: string;
    selected?: boolean;
    onPress?: () => void;
    additionalInfo?: string;
    disabled?: boolean; // Add disabled prop
}