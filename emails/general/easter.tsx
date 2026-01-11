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
        This is the Easter email.
      </Typography>
      <br />
      <Link href={baseHref('/account/general')}>this is a link</Link>
      <br />
      <Button href={baseHref('/account/general')}>
        Goto Dashboard
      </Button>
    </div>
  );
};

export const Easter = ({ ...props }: GeneralEasterProps) => {
  return (
    <EmailContentWrapper email={props.email} previewText="happy easter">
      <EmailBody {...props} />
    </EmailContentWrapper>
  );
};

Easter.PreviewProps = {
  email: "notify@org.com",
  name: "John Doe",
} as GeneralEasterProps;

export default Easter;
