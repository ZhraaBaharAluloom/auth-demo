import { Image } from "expo-image";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const AboutScreen = () => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Header */}
      <View style={styles.section}>
        <Text style={styles.title}>About Our App</Text>
        <Text style={styles.paragraph}>
          Welcome to our little corner of the digital world! Here, we share
          stories, tips, and insights to make your experience amazing.
        </Text>
      </View>

      {/* Image */}
      <Image
        source={{
          uri: "https://storage.kempinski.com/cdn-cgi/image/w=1920,f=auto,fit=scale-down/ki-cms-prod/images/0/1/0/5/17185010-2-eng-GB/8c9eaebd6fe0-83078689_4K.jpg",
        }}
        style={styles.image}
        contentFit="cover"
      />

      {/* Section 1 */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Our Mission</Text>
        <Text style={styles.paragraph}>
          Our mission is to craft memorable dining experiences in Kuwait that
          delight the senses, celebrate local taste, and spark discovery. We aim
          to build a vibrant food community where cultures meet, stories are
          shared, and every visit offers something new to savor.
        </Text>
      </View>

      {/* Section 2 */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>What We Do</Text>
        <Text style={styles.paragraph}>
          We explore Kuwait’s restaurant scene—from hidden local gems to iconic
          dining destinations. Our focus is on honest reviews, signature dishes,
          ambiance, and service, giving food lovers a clear sense of what to
          expect before they book a table.
        </Text>
      </View>

      {/* Section 3 */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Get Involved</Text>
        <Text style={styles.paragraph}>
          Be part of the journey. Share your favorite spots, follow us for the
          latest openings, and connect with fellow food enthusiasts. Your
          recommendations and experiences help shape the conversation.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 Kuwait Dining Guide. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#2D2E2F",
  },
  scrollContent: {
    paddingHorizontal: 20,

    paddingTop: 20,
    paddingBottom: 100,
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

  image: {
    width: "100%",
    height: 200,
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
