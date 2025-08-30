import React, { useState, useCallback, useEffect } from 'react';
import Editor from './components/Editor';
import PreviewPane from './components/PreviewPane';
import Header from './components/Header';
import InputWithCopy from './components/InputWithCopy';

const defaultTemplate = `<!-- 
Recipient: moonweb516@gmail.com, support@lowkick.games
Subject: Unlocking WorldShards' Growth Potential for the $SHARDS Launch
-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alie Network • Ultimate Web3 Growth Partner</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: Arial, Helvetica, sans-serif;">

  <!-- Preheader -->
  <div style="display: none; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: transparent;">
    🚀 A tailored growth strategy for the WorldShards token launch. Let's make it legendary.
  </div>

  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f1f5f9;">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="680" style="width: 680px; max-width: 100%; background-color: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);">

          <!-- Header -->
          <tr>
            <td style="background-color: #0f172a; padding: 24px 32px; border-radius: 16px 16px 0 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" style="vertical-align: middle;">
                    <a href="https://alie.network" target="_blank" style="text-decoration: none;">
                      <img src="https://i.imgur.com/K1p4IeC.png" width="40" alt="Alie Network" style="display: block; border: 0; border-radius: 50%;">
                    </a>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <a href="https://alie.network" target="_blank" style="background-color: #4f46e5; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: bold; padding: 12px 18px; border-radius: 8px; display: inline-block;">
                      Schedule a Call
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero Section -->
          <tr>
            <td style="padding: 48px 32px; text-align: center;">
              <h1 style="color: #1e293b; font-size: 36px; font-weight: bold; line-height: 1.25; margin: 0 0 16px 0;">
                The Ultimate Growth Partner for Ambitious Web3 Projects
              </h1>
              <p style="color: #64748b; font-size: 17px; line-height: 1.6; margin: 0;">
                We deliver real engagement, measurable ROI, and sustainable growth through our elite network of KOLs, investors, and strategic partners.
              </p>
            </td>
          </tr>

          <!-- Personal Greeting -->
          <tr>
            <td style="padding: 0 32px 32px;">
              <div style="background-color: #f8fafc; border-left: 4px solid #4f46e5; border-radius: 8px; padding: 24px;">
                <p style="font-size: 16px; line-height: 1.6; margin: 0;">
                  <span style="color: #475569;">Hello <strong style="color: #4f46e5;">WorldShards Team</strong>,</span><br><br>
                  <span style="color: #475569;">I'm reaching out because I've been closely following the development of <strong>WorldShards</strong>. An NFT-themed open-world MMORPG is an ambitious and exciting venture, and we're particularly impressed with your community engagement leading up to the <strong>$SHARDS token launch</strong>.</span><br><br>
                  <span style="color: #475569;">At <strong>Alie Network</strong>, we specialize in partnering with promising GameFi projects like yours to ensure their launch doesn't just make a splash, but creates a sustainable wave of user acquisition. We see a powerful synergy between your vision and our data-driven growth methodologies.</span>
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 32px; border-radius: 0 0 16px 16px; border-top: 1px solid #e2e8f0; text-align: center;">
              <div style="margin-bottom: 16px;">
                <a href="https://x.com/networkAlie" target="_blank" style="color: #64748b; text-decoration: none; font-size: 13px; font-weight: bold; padding: 0 8px;">X</a>
                <span style="color: #cbd5e1;">•</span>
                <a href="https://linkedin.com/in/alienetwork" target="_blank" style="color: #64748b; text-decoration: none; font-size: 13px; font-weight: bold; padding: 0 8px;">LinkedIn</a>
                <span style="color: #cbd5e1;">•</span>
                <a href="https://reddit.com/user/networkAlie" target="_blank" style="color: #64748b; text-decoration: none; font-size: 13px; font-weight: bold; padding: 0 8px;">Reddit</a>
                <span style="color: #cbd5e1;">•</span>
                <a href="https://github.com/networkAlie" target="_blank" style="color: #64748b; text-decoration: none; font-size: 13px; font-weight: bold; padding: 0 8px;">GitHub</a>
                <span style="color: #cbd5e1;">•</span>
                <a href="https://www.youtube.com/@networkAlie" target="_blank" style="color: #64748b; text-decoration: none; font-size: 13px; font-weight: bold; padding: 0 8px;">YouTube</a>
              </div>
              <p style="color: #94a3b8; font-size: 12px; line-height: 1.5; margin: 0;">
                © 2025 Alie Network. All rights reserved.<br>
                <a href="https://alie.network" target="_blank" style="color: #94a3b8; text-decoration: none;">alie.network</a> • <a href="mailto:info@alie.network" style="color: #94a3b8; text-decoration: none;">info@alie.network</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`;


const App: React.FC = () => {
    const [recipients, setRecipients] = useState('');
    const [subject, setSubject] = useState('');
    const [htmlInput, setHtmlInput] = useState('');
    const [previewHtml, setPreviewHtml] = useState('');

    const parseAndSetAll = useCallback((fullText: string) => {
        let recipientsStr = '';
        let subjectStr = '';
        let cleanHtml = fullText;

        const commentRegex = /<!--(.*?)-->/sg;
        const commentsToRemove = new Set<string>();
        let foundRecipient = false;
        let foundSubject = false;

        for (const match of fullText.matchAll(commentRegex)) {
            const commentContent = match[1];
            const fullComment = match[0];

            const recipientLineMatch = commentContent.match(/(?:RECIPIENTS|Recipient):\s*(.*)/i);
            const subjectLineMatch = commentContent.match(/(?:SUBJECT|Subject):\s*(.*)/i);
            
            if (recipientLineMatch && recipientLineMatch[1]) {
                recipientsStr = recipientLineMatch[1].trim();
                foundRecipient = true;
                commentsToRemove.add(fullComment);
            }
            if (subjectLineMatch && subjectLineMatch[1]) {
                subjectStr = subjectLineMatch[1].trim();
                foundSubject = true;
                commentsToRemove.add(fullComment);
            }
        }
        
        for(const comment of commentsToRemove) {
            cleanHtml = cleanHtml.replace(comment, '');
        }

        if (foundRecipient) setRecipients(recipientsStr);
        if (foundSubject) setSubject(subjectStr);
        
        setHtmlInput(cleanHtml.trim());
        setPreviewHtml(cleanHtml.trim());
    }, []);

    useEffect(() => {
        parseAndSetAll(defaultTemplate);
    }, [parseAndSetAll]);


    const handleHtmlInputChange = (newText: string) => {
        if (/<!--[\s\S]*?(?:RECIPIENTS|Recipient|SUBJECT|Subject):/i.test(newText)) {
            parseAndSetAll(newText);
        } else {
            setHtmlInput(newText);
        }
    };

    const handlePreview = useCallback(() => {
        setPreviewHtml(htmlInput);
    }, [htmlInput]);

    const handleClear = useCallback(() => {
        setRecipients('');
        setSubject('');
        setHtmlInput('');
        setPreviewHtml('');
    }, []);

    return (
        <div className="flex flex-col h-screen bg-gray-900 text-gray-100 font-sans">
            <Header />
            <main className="flex-grow flex flex-col md:flex-row gap-4 p-4 overflow-hidden">
                <div className="flex flex-col md:w-1/2 h-full gap-4">
                    <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                        <InputWithCopy
                            id="recipients"
                            label="Recipients"
                            value={recipients}
                            onChange={(e) => setRecipients(e.target.value)}
                            placeholder="user1@example.com, ..."
                            isTextarea={true}
                        />
                        <InputWithCopy
                            id="subject"
                            label="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Your email subject"
                        />
                    </div>

                    <div className="flex-grow min-h-0">
                        <Editor
                            value={htmlInput}
                            onChange={handleHtmlInputChange}
                            onPreview={handlePreview}
                            onClear={handleClear}
                        />
                    </div>
                </div>

                <div className="flex flex-col md:w-1/2 h-full">
                    <PreviewPane 
                      recipients={recipients}
                      subject={subject}
                      htmlContent={previewHtml} 
                    />
                </div>
            </main>
        </div>
    );
};

export default App;