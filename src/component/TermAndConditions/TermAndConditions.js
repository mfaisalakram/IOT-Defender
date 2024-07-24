import React from "react";
import { Box, Typography } from "@mui/material";

const TermsConditions = () => {
  return (
    <div
      className="global-container"
      style={{ textAlign: "start", padding: 20,}}
    >
      <Typography
        sx={{
          fontSize: "52px",
          textAlign: "center",
          mb:{xs:5} 
        }}
        gutterBottom
      >
        Terms And Conditions
      </Typography>
      <Typography
        sx={{ fontSize: "16px", fontWeight: "700", mb: 1 }}
        gutterBottom
      >
        Last Updated: June 25, 2024
      </Typography>

      <Typography sx={{ fontSize: "16px" }} paragraph>
        Welcome to IoTDefender.io, a website provided by Wolfberry LLC
        ("Wolfberry," "we," "us," or "our"). These Terms and Conditions govern
        your access to and use of IoTDefender.io and its associated services
        (collectively, the "Service"). By accessing or using the Service, you
        agree to be bound by these Terms and Conditions.
      </Typography>

      <Typography sx={{ fontSize: "20px", fontWeight: "500" }} gutterBottom>
        1. Acceptance of Terms
      </Typography>
      <Typography sx={{ fontSize: "16px" }} paragraph>
        By using the Service, you agree to these terms. If you do not agree to
        these terms, please do not use the Service.
      </Typography>

      <Typography sx={{ fontSize: "20px", fontWeight: "500" }} gutterBottom>
        2. Changes to Terms
      </Typography>
      <Typography sx={{ fontSize: "16px" }} paragraph>
        We reserve the right to modify these Terms and Conditions at any time.
        We will always post the most current version on our website. By
        continuing to use the Service after we post any changes, you accept the
        updated Terms and Conditions.
      </Typography>

      <Typography sx={{ fontSize: "20px", fontWeight: "500" }} gutterBottom>
        3. Privacy
      </Typography>
      <Typography sx={{ fontSize: "16px" }} paragraph>
        Your privacy is important to us. Our Privacy Policy explains how we
        collect, use, and protect your personal information. By using the
        Service, you agree to the terms of the Privacy Policy.
      </Typography>

      <Typography sx={{ fontSize: "20px", fontWeight: "500" }} gutterBottom>
        4. Service Access
      </Typography>
      <Typography sx={{ fontSize: "20px", fontWeight: "400", mb: 1 }}>
        a. License
      </Typography>
      <Typography sx={{ fontSize: "16px" }} paragraph>
        We grant you a limited, non-exclusive, non-transferable, and revocable
        license to use the Service strictly in accordance with these Terms.
      </Typography>
      <Typography sx={{ fontSize: "20px", fontWeight: "400", mb: 1 }}>
        b. Service Modifications
      </Typography>
      <Typography sx={{ fontSize: "16px" }} paragraph>
        We may change, suspend, or discontinue any aspect of the Service at any
        time, including hours of operation or availability of the Service or any
        feature, without notice and liability.
      </Typography>

      <Typography sx={{ fontSize: "20px", fontWeight: "500" }} gutterBottom>
        5. User Obligations
      </Typography>
      <Typography sx={{ fontSize: "16px" }} paragraph>
        You agree to use the Service only for lawful purposes and in a way that
        does not infringe the rights of, restrict, or inhibit anyone else's use
        of the Service. Prohibited behavior includes harassing or causing
        distress or inconvenience to any other user, transmitting obscene or
        offensive content, or disrupting the normal flow of the Service.
      </Typography>

      <Typography sx={{ fontSize: "20px", fontWeight: "500" }} gutterBottom>
        6. Intellectual Property
      </Typography>
      <Typography sx={{ fontSize: "16px" }} paragraph>
        The Service and its original content, features, and functionality are
        and will remain the exclusive property of Wolfberry LLC and its
        licensors. Our trademarks and trade dress may not be used in connection
        with any product or service without the prior written consent of
        Wolfberry LLC.
      </Typography>

      <Typography sx={{ fontSize: "20px", fontWeight: "500" }} gutterBottom>
        7. Disclaimer of Warranties
      </Typography>
      <Typography sx={{ fontSize: "16px" }} paragraph>
        The Service is provided on an "as is" and "as available" basis. We make
        no warranties, expressed or implied, about the Service, including but
        not limited to the accuracy, reliability, completeness, or timeliness of
        the content. To the fullest extent permitted by law, we disclaim all
        warranties, express or implied, in connection with the Service and your
        use of it.
      </Typography>

      <Typography sx={{ fontSize: "20px", fontWeight: "500" }} gutterBottom>
        8. Limitation of Liability
      </Typography>
      <Typography sx={{ fontSize: "16px" }} paragraph>
        To the fullest extent permitted by law, Wolfberry LLC shall not be
        liable for any indirect, incidental, special, consequential, or punitive
        damages, or any loss of profits or revenues, whether incurred directly
        or indirectly, or any loss of data, use, goodwill, or other intangible
        losses, resulting from (a) your use or inability to use the Service; (b)
        any unauthorized access to or use of our servers and/or any personal
        information stored therein; (c) any interruption or cessation of
        transmission to or from the Service; (d) any bugs, viruses, trojan
        horses, or the like that may be transmitted to or through our Service by
        any third party; (e) any errors or omissions in any content; or (f) any
        defamatory, offensive, or illegal conduct of any third party.
      </Typography>

      <Typography sx={{ fontSize: "20px", fontWeight: "500" }} gutterBottom>
        9. Indemnification
      </Typography>
      <Typography sx={{ fontSize: "16px" }} paragraph>
        You agree to defend, indemnify, and hold harmless Wolfberry LLC and its
        subsidiaries, agents, licensors, managers, and other affiliated
        companies, and their employees, contractors, agents, officers, and
        directors, from and against any and all claims, damages, obligations,
        losses, liabilities, costs or debt, and expenses (including but not
        limited to attorney's fees) arising from: (a) your use of and access to
        the Service; (b) your violation of any term of these Terms and
        Conditions; (c) your violation of any third-party right, including
        without limitation any right of privacy or intellectual property; or (d)
        any claim that your use of the Service caused damage to a third party.
      </Typography>

      <Typography sx={{ fontSize: "20px", fontWeight: "500" }} gutterBottom>
        10. Governing Law
      </Typography>
      <Typography sx={{ fontSize: "16px" }} paragraph>
        These Terms and Conditions and any separate agreements whereby we
        provide you Services shall be governed by and construed in accordance
        with the laws of the State of Delaware, USA, without regard to its
        conflict of law principles.
      </Typography>

      <Typography sx={{ fontSize: "20px", fontWeight: "500" }} gutterBottom>
        11. Contact Us
      </Typography>
      <Typography sx={{ fontSize: "16px" }} paragraph>
        If you have any questions about these Terms and Conditions, please
        contact us at info@wolfberryllc.com.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        <Typography sx={{ fontSize: "16px" }}>
          FAQ | Privacy Policy | Terms and Conditions
        </Typography>
        <Typography sx={{ fontSize: "14px",  marginBlock: "10px", }}>© 2024 Wolfberry LLC</Typography>
      </Box>
    </div>
  );
};

export default TermsConditions;
