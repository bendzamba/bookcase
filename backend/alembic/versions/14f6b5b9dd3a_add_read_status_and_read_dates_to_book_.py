"""Add read status and read dates to Book table

Revision ID: 14f6b5b9dd3a
Revises: 92d98cc30f7d
Create Date: 2024-08-30 00:59:17.419830

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
import sqlmodel


# revision identifiers, used by Alembic.
revision: str = '14f6b5b9dd3a'
down_revision: Union[str, None] = '92d98cc30f7d'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('book', sa.Column('read_status', sa.Enum('not_read', 'read', 'reading', name='readstatus'), nullable=False, server_default='not_read'))
    op.add_column('book', sa.Column('read_start_date', sqlmodel.sql.sqltypes.AutoString(), nullable=True))
    op.add_column('book', sa.Column('read_end_date', sqlmodel.sql.sqltypes.AutoString(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('book', 'read_end_date')
    op.drop_column('book', 'read_start_date')
    op.drop_column('book', 'read_status')
    # ### end Alembic commands ###
