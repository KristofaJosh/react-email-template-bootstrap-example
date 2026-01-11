// @generated-by-plop
import { Button } from "@/components/button";
import { EmailContentWrapper } from "@/components/email-wrapper";
import { Link } from "@/components/link";
import { Typography } from "@/components/typography";
import { useEmailVariables } from "@/lib/context/variable-context";

export interface GeneralEasterProps {
  email: string;
  name?: string;
}

const EmailBody = ({ name }: GeneralEasterProps) => {
  const { baseHref } = useEmailVariables();

  return (
    <div className="content-body">
      {name ? <Typography>Hi {name},</Typography> : null}
      <Typography>
        Wishing you a wonderful Easter filled with joy, peace, and plenty of treats! May this season of renewal bring happiness to you and your loved ones.
      </Typography>
      <br />
      <Button href={baseHref('/account/general')}>
        Go to Account
      </Button>
      <br />
      <Typography>
        If you have any questions, feel free to visit our <Link href={baseHref('/faq')}>Help Center</Link>.
      </Typography>
    </div>
  );
};

export const Easter = ({ ...props }: GeneralEasterProps) => {
  return (
    <EmailContentWrapper email={props.email} previewText="Wishing you a Joyful Easter!">
      <EmailBody {...props} />
    </EmailContentWrapper>
  );
};

Easter.PreviewProps = {
  email: "notify@org.com",
  name: "John Doe",
} as GeneralEasterProps;

export default Easter;
