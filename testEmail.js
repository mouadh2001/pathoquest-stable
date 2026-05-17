import * as dotenv from "../pathQuestAdmin/node_modules/dotenv/lib/main.js";
import { sendPlayerRegistrationConfirmation } from "../pathQuestAdmin/server/services/emailService.js";

dotenv.config({ path: "../pathQuestAdmin/.env" });

async function testEmail() {
  console.log("Testing email...");
  const result = await sendPlayerRegistrationConfirmation("test@example.com", "TestUser", "TestPassword123");
  console.log("Result:", result);
}

testEmail();
