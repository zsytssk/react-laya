import * as React from "react";
import { Box } from "react-laya";

type LoadableOptions<Props> = {
  loader(setState: (state: PropsOfClass<LoadableState>) => void): void;
  loadingRender(state: LoadableState): React.ReactNode;
  render(props: Props): React.ReactNode;
  delay?: number;
};

type LoadableState = {
  loaded?: boolean;
  percent?: number;
  delayed?: boolean;
};

type PropsOfClass<T> = { [P in keyof T]?: T[P] };

export function Loadable<Props>(option: LoadableOptions<Props>) {
  class LoadableClass extends React.Component<Props, LoadableState> {
    state = {
      loaded: false,
      percent: 0,
      delayed: true
    };
    timeout: any;
    componentDidMount() {
      option.loader(this.setState.bind(this));

      if (option.delay) {
        this.timeout = setTimeout(() => {
          this.setState({
            delayed: false
          });
        }, option.delay);
      } else {
        this.setState({
          delayed: false
        });
      }
    }
    componentWillUnmount() {
      clearTimeout(this.timeout);
    }
    render() {
      if (this.state.delayed) {
        return <Box />;
      }
      if (this.state.loaded) {
        return option.render(this.props);
      }
      return option.loadingRender(this.state);
    }
  }
  return LoadableClass;
}
