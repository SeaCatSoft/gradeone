-- grant_admin.sql — make one account an admin.
--
-- NOT a migration. Run it once, by hand, in the Supabase SQL editor.
--
-- This is the bootstrap, and it exists because of a deliberate deadlock:
-- set_user_role() refuses to run unless an admin is already calling it, so the
-- FIRST admin cannot be made through the app. The SQL editor runs with
-- privileges that bypass RLS, which is exactly why this is the one thing that
-- has to be done outside it.
--
-- After this, promote everyone else from the app: Account -> People. Do not
-- come back here.
--
-- Replace the email below with the account's own. It must already have signed
-- up -- there is no profile to promote until the account exists.

update profiles
   set role = 'admin'
 where id = (select id from auth.users where lower(email) = lower('you@example.com'));

-- Confirm it. If this returns no rows, the email did not match any account:
-- check for a typo, and check the address the account actually signed up with.
select u.email, p.display_name, p.role
  from profiles p
  join auth.users u on u.id = p.id
 where p.role in ('admin', 'teacher')
 order by p.role, u.email;
