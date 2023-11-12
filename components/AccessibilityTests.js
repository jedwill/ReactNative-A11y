import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import { Divider } from "@rneui/themed";
function MiscPropTests() {
  return (
    <ScrollView>
      <View style={{ margin: 20 }}>
        <View>
          <Text style={styles.pText}>
            Image with alt text via{" "}
            <Text style={styles.code}>accessibilityLabel</Text> prop
          </Text>
          <Image
            accessible={true}
            accessibilityLabel="cupcake"
            source={require("../assets/cupcake.jpg")}
            style={{ width: 200, height: 200, margin: 10 }}
          />
        </View>
        <Divider />
        <View>
          <Text role="heading" style={styles.headingText}>
            Heading text with <Text style={styles.code}>role="heading"</Text>{" "}
            prop
          </Text>

          <Text role="heading" style={styles.headingText}>
            Heading text with{" "}
            <Text style={styles.code}>accessibilityRole="header"</Text> prop
          </Text>
          <Text style={styles.pText} accessibilityElementsHidden={true}>
            This text is hidden from iOS VoiceOver with the{" "}
            <Text style={styles.code}>
              accessibilityElementsHidden={"{true}"}
            </Text>{" "}
            prop
          </Text>
          <Text
            style={styles.pText}
            importantForAccessibility="no-hide-descendants"
          >
            This text is hidden from Android TalkBack with the
            <Text style={styles.code}>
              {" "}
              importantForAccessibility="no-hide-descendants"
            </Text>{" "}
            prop
          </Text>
          <View aria-hidden={true}>
            <Text style={styles.pText}>
              This text is hidden from VoiceOver and TalkBack with{" "}
              <Text style={styles.code}>aria-hidden={"{true}"}</Text> prop on
              its parent <Text style={styles.code}>{"<View>"}</Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default MiscPropTests;

let code = "monospace";

if (Platform.OS === "ios") {
  code = "Courier New";
} else if (Platform.OS === "android") {
  code = "monospace";
}

const styles = StyleSheet.create({
  heading: {
    margin: 8,
  },
  headingText: {
    margin: 8,
    fontWeight: "bold",
    fontSize: 25,
  },
  code: {
    fontFamily: code,
  },
  pText: {
    fontSize: 18,
    margin: 8,
  },
});
