import { AbilityBuilder } from '@casl/ability';

export const ability = AbilityBuilder.define(can => {
  can('manage', 'AdminStuff');
});
