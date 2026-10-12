"use client";

import {
  InviteMembersButton,
  OrganizationSwitcher,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Suspense } from "react";
import { ThemeControl } from "./theme-control";

export function AccountControls() {
  return (
    <div className="account-controls">
      <ThemeControl />
      <Suspense fallback={<span className="control-placeholder" />}>
        <Show when="signed-out">
          <SignInButton mode="redirect">
            <button className="button button-quiet" type="button">
              Sign in
            </button>
          </SignInButton>
          <SignUpButton mode="redirect">
            <button className="button button-primary" type="button">
              Create account
            </button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <OrganizationSwitcher
            afterCreateOrganizationUrl="/"
            afterSelectOrganizationUrl="/"
          />
          <Show when={{ permission: "org:sys_memberships:manage" }}>
            <InviteMembersButton>
              <button className="button button-quiet" type="button">
                Invite
              </button>
            </InviteMembersButton>
          </Show>
          <UserButton />
        </Show>
      </Suspense>
    </div>
  );
}
