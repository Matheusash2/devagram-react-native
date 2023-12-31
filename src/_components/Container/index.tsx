import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { IContainer } from "./types";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./styles";
import { useState } from "react";
import Search from "./Header/Search";
import Loading from "../Loading";

const Container = (props: IContainer) => {
  const [filter, setFilter] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <Header
        editProfileHeader={props.headerProps.editProfileHeader}
        profileHeader={props.headerProps.profileHeader}
        default={props.headerProps.default}
        headerPublication={props.headerProps.headerPublication}
        searchBar={{
          value: filter,
          onChange: (value: string) => setFilter(value),
        }}
      />
      <Search filter={filter} />
      <View style={styles.content}>
        {!props.isLoading && props.children} 
        <Loading isLoading={props.isLoading}/>
      </View>
      <Footer currentTab={props.footerProps.currentTab} />
    </SafeAreaView>
  );
};

export default Container;
