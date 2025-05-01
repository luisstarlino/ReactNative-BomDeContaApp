/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2025-05-01 07:20
* @Description: All the types that should be used.
*****************************************************************************************/

import { ReactNode } from "react";
import { TextProps, TextStyle, ViewStyle } from "react-native";


export type ScreenWrapperProps = {
    style?: ViewStyle;
    children: React.ReactNode;
    bg?: string;
};

export type ModalWrapperProps = {
    style?: ViewStyle;
    children: React.ReactNode;
    bg?: string;
};

export type accountOptionType = {
    title: string;
    icon: React.ReactNode;
    bgColor: string;
    routeName?: any;
};

export type TypoProps = {
    size?: number;
    color?: string;
    fontWeight?: TextStyle["fontWeight"];
    children: any | null;
    style?: TextStyle;
    textProps?: TextProps;
};

export type IconComponent = React.ComponentType<{
    height?: number;
    width?: number;
    strokeWidth?: number;
    color?: string;
    fill?: string;
}>;

export type IconProps = {
    name: string;
    color?: string;
    size?: number;
    strokeWidth?: number;
    fill?: string;
};

export type HeaderProps = {
    title?: string;
    style?: ViewStyle;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
};
