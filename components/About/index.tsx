import { Image } from "expo-image";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.section}>
          <Text style={styles.title}>About Our App</Text>
          <Text style={styles.paragraph}>
            Welcome to our little corner of the digital world! Here, we share
            stories, tips, and insights to make your experience amazing.
          </Text>
        </View>

        {/* Image */}
        <View style={[styles.section, styles.imageContainer]}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg",
            }}
            style={styles.image}
            contentFit="fill"
          />
        </View>

        {/* Section 1 */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Our Mission</Text>
          <Text style={styles.paragraph}>
            Our mission is to create content that educates, entertains, and
            inspires. We believe in building a community where ideas can flow
            freely and everyone can learn something new every day.
          </Text>
        </View>

        {/* Section 2 */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>What We Do</Text>
          <Text style={styles.paragraph}>
            From tutorials to personal stories, we cover topics that matter to
            our readers. We focus on quality content, clear explanations, and an
            engaging experience that keeps you coming back for more.
          </Text>
        </View>

        {/* Section 3 */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Get Involved</Text>
          <Text style={styles.paragraph}>
            Join our community! Follow us on social media, subscribe to our
            newsletter, or reach out with questions and suggestions. We love
            hearing from our readers.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2025 Blog Vibes. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D2E2F",
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 16,
    color: "#fff",
    lineHeight: 24,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 12,
  },
  footer: {
    marginTop: 40,
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#999",
  },
});
