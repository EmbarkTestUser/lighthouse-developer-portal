import React from 'react';
import {
  formatEntityRefTitle,
  EntityRefLink,
  EntityRefLinks,
} from '@backstage/plugin-catalog-react';
import { Chip } from '@material-ui/core';
import { EntityRow } from './types';
import { OverflowTooltip, TableColumn } from '@backstage/core-components';
import { Entity } from '@backstage/catalog-model';

type NameColumnProps = {
  defaultKind?: string;
};

export function createNameColumn(
  props?: NameColumnProps,
): TableColumn<EntityRow> {
  function formatContent(entity: Entity): string {
    return (
      entity.metadata?.title ||
      formatEntityRefTitle(entity, {
        defaultKind: props?.defaultKind,
      })
    );
  }

  return {
    title: 'Name',
    field: 'resolved.name',
    highlight: true,
    customSort({ entity: entity1 }, { entity: entity2 }) {
      // TODO: We could implement this more efficiently by comparing field by field.
      // This has similar issues as above.
      return formatContent(entity1).localeCompare(formatContent(entity2));
    },
    render: ({ entity }) => (
      <EntityRefLink
        entityRef={entity}
        defaultKind={props?.defaultKind || 'Component'}
        title={entity.metadata?.title}
      />
    ),
  };
}

export function createSystemColumn(): TableColumn<EntityRow> {
  return {
    title: 'System',
    field: 'resolved.partOfSystemRelationTitle',
    render: ({ resolved }) => (
      <EntityRefLinks
        entityRefs={resolved.partOfSystemRelations}
        defaultKind="system"
      />
    ),
  };
}

export function createOwnerColumn(): TableColumn<EntityRow> {
  return {
    title: 'Owner',
    field: 'resolved.ownedByRelationsTitle',
    render: ({ resolved }) => (
      <EntityRefLinks
        entityRefs={resolved.ownedByRelations}
        defaultKind="group"
      />
    ),
  };
}

export function createSpecTypeColumn(): TableColumn<EntityRow> {
  return {
    title: 'Type',
    field: 'entity.spec.type',
    hidden: true,
  };
}

export function createSpecLifecycleColumn(): TableColumn<EntityRow> {
  return {
    title: 'Lifecycle',
    field: 'entity.spec.lifecycle',
  };
}

export function createMetadataDescriptionColumn(): TableColumn<EntityRow> {
  return {
    title: 'Description',
    field: 'entity.metadata.description',
    render: ({ entity }) => (
      <OverflowTooltip
        text={entity.metadata.description}
        placement="bottom-start"
      />
    ),
    width: 'auto',
  };
}

export function createTagsColumn(): TableColumn<EntityRow> {
  return {
    title: 'Tags',
    field: 'entity.metadata.tags',
    cellStyle: {
      padding: '0px 16px 0px 20px',
    },
    render: ({ entity }) => (
      <>
        {entity.metadata.tags &&
          entity.metadata.tags.map(t => (
            <Chip
              key={t}
              label={t}
              size="small"
              variant="outlined"
              style={{ marginBottom: '0px' }}
            />
          ))}
      </>
    ),
  };
}