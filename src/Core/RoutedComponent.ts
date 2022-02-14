import React from "react";
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class RoutedComponent extends React.Component<Props> {

}